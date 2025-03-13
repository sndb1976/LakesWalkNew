import os
import json

base_dir = "images"

for year in os.listdir(base_dir):
    year_path = os.path.join(base_dir, year)
    
    if not os.path.isdir(year_path):
        continue  # Skip if it's not a directory
    
    for location in os.listdir(year_path):
        location_path = os.path.join(year_path, location)

        if not os.path.isdir(location_path):
            continue  # Skip if it's not a directory
        
        # Collect all image files
        image_files = [f for f in os.listdir(location_path) 
                       if os.path.isfile(os.path.join(location_path, f)) and f.lower().endswith(('.jpg', '.png'))]
        
        if not image_files:
            print(f"No images found in {location_path}, skipping...")
            continue  # Skip if no images are found

        json_path = os.path.join(location_path, "images.json")
        
        try:
            with open(json_path, "w") as json_file:
                json.dump(image_files, json_file, indent=4)  # Pretty-print JSON
            
            print(f"✅ Generated: {json_path}")
        
        except Exception as e:
            print(f"❌ Error writing JSON file for {location_path}: {e}")

