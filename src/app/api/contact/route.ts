import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validaciones básicas
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Preparar el contenido del correo
    const emailContent = `
From: ${name} <${email}>
Subject: Nuevo mensaje de contacto: ${subject}

Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}
    `;

    // Enviar el correo usando el comando mail
    await execAsync(`echo "${emailContent}" | mail -s "Contacto Portfolio: ${subject}" sergimima@gmail.com`);

    return NextResponse.json(
      { message: '¡Mensaje enviado con éxito!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
