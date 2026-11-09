const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = fs.readFileSync('src/components/Seo.tsx', 'utf8');
const code = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const elements=[];
const document={title:'',head:{appendChild:e=>elements.push(e)},createElement:tag=>({tag,attrs:{},setAttribute(k,v){this.attrs[k]=v;}}),querySelector:s=>elements.find(e=>s==='link[rel="canonical"]'?e.tag==='link'&&e.attrs.rel==='canonical':s===`meta[name="${e.attrs.name}"]`||s===`meta[property="${e.attrs.property}"]`),getElementById:id=>elements.find(e=>e.id===id)};
const moduleExports={};
vm.runInNewContext(code,{exports:moduleExports,document,URL,require:n=>n==='react'?{useEffect:fn=>fn()}:n.includes('company')?{COMPANY:{dominio:'https://www.impactorecuperacoes.com.br',nomeFantasia:'Impacto'}}:{getOrganizationSchema:()=>({}),getWebSiteSchema:()=>({})}});
for(const path of ['/','/depoimentos','/servicos','/contato','/abrangencia','/conteudo','/conteudo/exemplo','/servicos-em/campinas']){
 moduleExports.Seo({title:path,description:'test',canonicalUrl:`https://impactorecuperacoes.com.br${path}`,structuredData:[{'@type':'BreadcrumbList'}]});
 assert.equal(document.querySelector('link[rel="canonical"]').attrs.href,`https://www.impactorecuperacoes.com.br${path}`);
 assert.equal(elements.filter(e=>e.tag==='link'&&e.attrs.rel==='canonical').length,1);
 assert.ok(JSON.parse(document.getElementById('json-ld-seo-data').textContent).some(x=>x['@type']==='BreadcrumbList'));
}
console.log('PASS: 8 canonical routes, single tag, legacy schema prop');
