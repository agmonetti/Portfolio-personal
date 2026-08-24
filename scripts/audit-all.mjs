import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
];

const outDir = './lh-report';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('🚀 Running Lighthouse Audits across all portfolio pages...\n');

const results = [];

for (const route of routes) {
  const url = `http://localhost:4173${route.path}`;
  
  // Desktop
  const deskFile = path.join(outDir, `${route.name.toLowerCase()}-desktop.json`);
  console.log(`Auditing ${route.name} (Desktop)...`);
  execSync(
    `npx lighthouse "${url}" --preset=desktop --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="${deskFile}" --quiet`,
    { stdio: 'inherit' }
  );
  const deskData = JSON.parse(fs.readFileSync(deskFile, 'utf8'));

  // Mobile
  const mobFile = path.join(outDir, `${route.name.toLowerCase()}-mobile.json`);
  console.log(`Auditing ${route.name} (Mobile)...`);
  execSync(
    `npx lighthouse "${url}" --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="${mobFile}" --quiet`,
    { stdio: 'inherit' }
  );
  const mobData = JSON.parse(fs.readFileSync(mobFile, 'utf8'));

  const extractMetrics = (data, mode) => {
    return {
      page: route.name,
      mode,
      perf: Math.round(data.categories.performance.score * 100),
      a11y: Math.round(data.categories.accessibility.score * 100),
      bp: Math.round(data.categories['best-practices'].score * 100),
      seo: Math.round(data.categories.seo.score * 100),
      cls: data.audits['cumulative-layout-shift']?.displayValue || '0',
      lcp: data.audits['largest-contentful-paint']?.displayValue || '0s',
      tbt: data.audits['total-blocking-time']?.displayValue || '0ms',
    };
  };

  results.push(extractMetrics(deskData, 'Desktop'));
  results.push(extractMetrics(mobData, 'Mobile'));
}

console.log('\n========================================================================================');
console.log('📊 LIGHTHOUSE AUDIT RESULTS ACROSS ALL PAGES');
console.log('========================================================================================\n');
console.table(results);

const allA11y100 = results.every((r) => r.a11y === 100);
const allBp100 = results.every((r) => r.bp === 100);
const allSeo100 = results.every((r) => r.seo === 100);

if (allA11y100 && allBp100 && allSeo100) {
  console.log('✅ All Accessibility, Best Practices, and SEO audits scored 100/100!');
} else {
  console.log('⚠️ Some audits did not reach 100.');
}
