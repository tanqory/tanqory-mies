const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = algoliasearch('C5H0VAS3BI', '372b89a44c58dc947b6559d2b8d2f878');

async function indexDocuments() {
  const docsDir = path.join(__dirname, '../docs');
  const records = [];

  function processDirectory(dir, urlPrefix = '/docs') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath, `${urlPrefix}/${file}`);
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data, content: markdownContent } = matter(content);
        
        const slug = file.replace(/\.(md|mdx)$/, '');
        const url = slug === 'index' ? urlPrefix : `${urlPrefix}/${slug}`;
        
        records.push({
          objectID: `${urlPrefix}/${slug}`.replace(/\/+/g, '-'),
          title: data.title || slug,
          content: markdownContent.substring(0, 5000), // Limit content
          url,
          type: 'documentation',
          hierarchy: {
            lvl0: data.sidebar_label || data.title || slug,
            lvl1: data.title || slug
          }
        });
      }
    });
  }

  processDirectory(docsDir);
  
  try {
    await client.saveObjects({
      indexName: 'movies_index', // แนะนำเปลี่ยนเป็น 'tanqory-mies-docs'
      objects: records
    });
    console.log(`Successfully indexed ${records.length} documents`);
  } catch (error) {
    console.error('Indexing failed:', error);
  }
}

indexDocuments();