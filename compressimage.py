from PIL import Image
import os

# Define input and output directories
input_folder = r"C:\Users\steve\Documents\Website\LakesWalkNew\images"

for root, _, files in os.walk(input_folder):
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
            img_path = os.path.join(root, file)

            try:
                # Open and verify image
                img = Image.open(img_path)
                img.verify()  # Check if image is valid
                img = Image.open(img_path).convert("RGB")  # Reopen for processing

                # Resize if width is larger than 1200px
                max_width = 1200
                if img.width > max_width:
                    w_percent = max_width / float(img.width)
                    h_size = int((float(img.height) * float(w_percent)))
                    img = img.resize((max_width, h_size))

                # Create corresponding output folder inside "compressed_images"
                relative_path = os.path.relpath(root, input_folder)  # Get subfolder path
                output_folder = os.path.join(input_folder, "compressed_images", relative_path)
                os.makedirs(output_folder, exist_ok=True)

                # Save the compressed image
                output_path = os.path.join(output_folder, file)
                img.save(output_path, optimize=True, quality=80)

                print(f"✅ Compressed: {file} -> {output_path}")

            except Exception as e:
                print(f"❌ Skipping {file}: {e}")

