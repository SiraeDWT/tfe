import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const SvgSprite = require('svg-sprite')

const sprite = new SvgSprite({
  mode: {
    symbol: {
      dest: '.',
      sprite: 'sprite.svg',
    },
  },
})

const iconsDir = './public/svg'

if (!fs.existsSync(iconsDir)) {
  console.error('❌ Le dossier public/svg/ est introuvable.')
  process.exit(1)
}

const files = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg') && file !== 'sprite.svg')

for (const file of files) {
  const content = fs.readFileSync(path.join(iconsDir, file), 'utf8')
  sprite.add(path.resolve(iconsDir, file), null, content)
}

sprite.compile((err, result) => {
  if (err) {
    console.error('❌ Erreur lors de la génération du sprite :', err)
    process.exit(1)
  }

  const output = result.symbol.sprite.contents
  fs.writeFileSync(path.join(iconsDir, 'sprite.svg'), output)
  console.log('✅ Le fichier sprite.svg généré dans public/svg/')
})
