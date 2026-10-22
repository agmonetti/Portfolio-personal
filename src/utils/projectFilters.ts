interface SearchableProject {
  category: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
}

const normalize = (text: string) =>
  text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

export function filterProjects<T extends SearchableProject>(projects: T[], query: string, category: string): T[] {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  return projects.filter(project => {
    if (category !== 'all' && project.category !== category) return false;
    const text = normalize([project.title, project.summary, project.description, ...project.tags].join(' '));
    return terms.every(term => text.includes(term));
  });
}
