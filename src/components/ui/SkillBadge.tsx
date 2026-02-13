interface SkillBadgeProps {
  name: string;
  icon?: string;
  category: 'blockchain' | 'frontend' | 'backend' | 'database';
}

const getCategoryColor = (category: string) => {
  const colors = {
    blockchain: 'bg-purple-100 text-purple-800',
    frontend: 'bg-blue-100 text-blue-800',
    backend: 'bg-green-100 text-green-800',
    database: 'bg-yellow-100 text-yellow-800',
  };
  return colors[category as keyof typeof colors];
};

const SkillBadge = ({ name, category }: SkillBadgeProps) => {
  const colorClass = getCategoryColor(category);
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
      {name}
    </span>
  );
};

export default SkillBadge;
