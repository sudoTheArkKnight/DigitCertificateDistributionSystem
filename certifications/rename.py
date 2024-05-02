import os

current_directory = os.getcwd()

i = 1
for filename in os.listdir(current_directory):
    if filename.endswith('.pdf'):
        new_filename = f"P00{i}.pdf"
        os.rename(os.path.join(current_directory, filename), os.path.join(current_directory, new_filename))
        i += 1
