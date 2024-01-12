import os
list = os.listdir(os.getcwd())
inn = 0
for i in list:
    if i.endswith(".mp3"):
        os.rename(i, f"{inn}.mp3")
        inn = inn+1
print("Renamed Successfully")
