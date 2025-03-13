import os
import json

base_dir = "images"

for year in os.listdir(base_dir):
    year_path = os.path.join(base_dir, year)
    if os.path.isdir(year_path):
        for location in os.listdir(year_path):
            location_path = os.path.join(year_path, location)
            if os.path.isdir(location_path):
                image_files = [f for f in os.listdir(location_path) if f.endswith(('.jpg', '.png'))]
                
                json_path = os.path.join(location_path, "images.json")
                with open(json_path, "w") as json_file:
                    json.dump(image_files, json_file)

                print(f"Generated: {json_path}")
