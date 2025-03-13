from PIL import Image
import os

input_folder = r"C:\Users\steve\Documents\Website\LakesWalkNew\images"
output_folder = r"C:\Users\steve\Documents\Website\LakesWalkNew\images\compressed_images"

os.makedirs(output_folder, exist_ok=True)

for root, _, files in os.walk(input_folder):
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
            img_path = os.path.join(root, file)
            img = Image.open(img_path)
            
            # Resize if width is larger than 1200px
            max_width = 1200
            if img.width > max_width:
                w_percent = max_width / float(img.width)
                h_size = int((float(img.height) * float(w_percent)))
                img = img.resize((max_width, h_size))               

            # Save with compression
            output_path = os.path.join(output_folder, file)
            img.save(output_path, optimize=True, quality=80)  # Adjust quality (80 is a good balance)

            print(f"✅ Compressed: {file} -> {output_path}")
