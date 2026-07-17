const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "../utils/images");

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const outputPath = filePath;

    const metadata = await sharp(filePath).metadata();
    const sizeKB = Math.round(fs.statSync(filePath).size / 1024);

    console.log(`Proses: ${path.basename(filePath)} (${sizeKB} KB, ${metadata.width}x${metadata.height})`);

    if (ext === ".jpg" || ext === ".jpeg"){
        await sharp(filePath)
            .resize({width: 1200, height: 1200, fit: "inside", withoutEnlargement: true})
            .jpeg({quality: 80, progressive: true})
            .toFile(outputPath + ".tmp");
    } else if (ext === ".png") {
        await sharp(filePath)
            .resize({width: 1200, height: 1200, fit: "inside", withoutEnlargement: true})
            .png({quality: 80})
            .toFile(outputPath + ".tmp");
    } else {
        return;
    }

    fs.renameSync(outputPath + ".tmp", outputPath);
    
    const newSizeKB = Math.round(fs.statSync(outputPath).size / 1024);

    console.log(`  → ${newSizeKB} KB (hemat ${Math.round((1 - newSizeKB / sizeKB) * 100)}%)`)
}

async function main() {
    console.log("=== Memulai Optimasi Gambar ===");
    console.log(`Direktori: ${imagesDir}\n`);

    const files = fs.readdirSync(imagesDir);
    const images = files.filter(file => 
        [".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
    );

    if (images.length === 0) {
        console.log("Tidak ada gambar yang ditemukan.");
        return;
    }

    for (const image of images) {
        await optimizeImage(path.join(imagesDir, image));
    }

    console.log("\n=== Optimasi Selesai! ===");
}