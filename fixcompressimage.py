from PIL import Image, ImageOps
import os

# Define input and output directories
input_folder = r"C:\Users\steve\Documents\Website\LakesWalkNew\images"

for root, _, files in os.walk(input_folder):
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
            img_path = os.path.join(root, file)

            try:
                # Open image
                img = Image.open(img_path)
                
                # Auto-rotate based on EXIF data
                img = ImageOps.exif_transpose(img)

                # Convert to RGB to avoid transparency issues
                img = img.convert("RGB")

                # Resize if width is larger than 1200px
                max_width = 1200
                if img.width > max_width:
                    w_percent = max_width / float(img.width)
                    h_size = int((float(img.height) * float(w_percent)))
                    img = img.resize((max_width, h_size))

                # Create corresponding output folder inside "compressed_images"
                relative_path = os.path.relpath(root, input_folder)  # Keep folder structure
                output_folder = os.path.join(input_folder, "compressed_images", relative_path)
                os.makedirs(output_folder, exist_ok=True)

                # Save the rotated and compressed image
                output_path = os.path.join(output_folder, file)
                img.save(output_path, optimize=True, quality=80)

                print(f"✅ Fixed & Compressed: {file} -> {output_path}")

            except Exception as e:
                print(f"❌ Skipping {file}: {e}")


