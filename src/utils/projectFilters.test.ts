import assert from 'node:assert/strict';
import { test } from 'node:test';
import { filterProjects } from './projectFilters.ts';

const projects = [
  { id: 'tools', category: 'developer', title: 'Editor', summary: 'Vista rápida', description: 'Buffers sincronizados', tags: ['Lua', 'C++'] },
  { id: 'ai', category: 'ai', title: 'Math MCP', summary: 'Numerical tools', description: 'Integration methods', tags: ['Python'] },
];

test('empty and whitespace queries preserve all entries and order', () => {
  assert.deepEqual(filterProjects(projects, '', 'all'), projects);
  assert.deepEqual(filterProjects(projects, '  ', 'all'), projects);
});

test('search covers localized title, summary, description and tags', () => {
  for (const query of ['EDITOR', 'rapida', 'sincronizados', 'c++']) {
    assert.deepEqual(filterProjects(projects, query, 'all').map(p => p.id), ['tools']);
  }
  assert.deepEqual(filterProjects(projects, 'INTEGRATION', 'all').map(p => p.id), ['ai']);
});

test('search terms combine across fields and ignore surrounding whitespace', () => {
  assert.deepEqual(filterProjects(projects, '  rápida LUA  ', 'all').map(p => p.id), ['tools']);
});

test('category and search intersect; unmatched queries return empty results', () => {
  assert.deepEqual(filterProjects(projects, '', 'ai').map(p => p.id), ['ai']);
  assert.deepEqual(filterProjects(projects, 'Lua', 'ai'), []);
  assert.deepEqual(filterProjects(projects, 'missing', 'all'), []);
  assert.deepEqual(filterProjects([], '', 'all'), []);
});

test('reset restores entries without mutating the input', () => {
  const original = structuredClone(projects);
  filterProjects(projects, 'Python', 'ai');
  assert.deepEqual(projects, original);
  assert.deepEqual(filterProjects(projects, '', 'all'), original);
});
