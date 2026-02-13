# Utiliza una imagen base de Node.js
FROM node:18

# Establece NODE_ENV=production
ENV NODE_ENV=production

# Configura postfix para que no pregunte durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Argumento para la contraseña de Gmail
ARG GMAIL_APP_PASSWORD

# Instala dependencias necesarias para Next.js y correo
RUN apt-get update && apt-get install -y \
    build-essential \
    mailutils \
    postfix \
    libsasl2-modules \
    && rm -rf /var/lib/apt/lists/*

# Configura las credenciales de Gmail
RUN echo "[smtp.gmail.com]:587 sergimima@gmail.com:${GMAIL_APP_PASSWORD}" > /etc/postfix/sasl_passwd

# Configura postfix para envío a través de Gmail
RUN postconf -e 'inet_interfaces = all' \
    && postconf -e 'mydestination = localhost' \
    && postconf -e 'mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128 172.16.0.0/12' \
    && postconf -e 'relayhost = [smtp.gmail.com]:587' \
    && postconf -e 'smtp_use_tls = yes' \
    && postconf -e 'smtp_sasl_auth_enable = yes' \
    && postconf -e 'smtp_sasl_security_options = noanonymous' \
    && postconf -e 'smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd' \
    && postconf -e 'smtp_tls_CAfile = /etc/ssl/certs/ca-certificates.crt' \
    && postmap /etc/postfix/sasl_passwd \
    && chmod 600 /etc/postfix/sasl_passwd*

# Configura el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --verbose

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Inicia la aplicación y el servicio de correo
CMD service postfix start && npm start