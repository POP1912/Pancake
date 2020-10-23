# Written by Rabia Alhaffar in 23/June/2020
# Script to build Pancake game framework from source!
from os import system, path, mkdir
import sys

if not path.exists("build"):
    mkdir("build")

# Tell Python where is source folder and what name of build
javascript_build = open("build/pancake.js","w")
source_code_folder = "src/" + sys.argv[1] + "/"

# Source files are in order, DO NOT CHANGE ANYTHING!
javascript_source_files = [
    open(source_code_folder + "main.js", "r"),
    open(source_code_folder + "browser.js", "r"),
    open(source_code_folder + "os.js", "r"),
    open(source_code_folder + "util.js", "r"),
    open(source_code_folder + "debug.js", "r"),
    open(source_code_folder + "game.js", "r"),
    open(source_code_folder + "canvas.js", "r"),
    open(source_code_folder + "context.js", "r"),
    open(source_code_folder + "device.js", "r"),
    open(source_code_folder + "input.js", "r"),
    open(source_code_folder + "physics.js", "r"),
    open(source_code_folder + "sprite.js", "r"),
    open(source_code_folder + "graphics.js", "r"),
    open(source_code_folder + "audio.js", "r"),
    open(source_code_folder + "video.js", "r"),
    open(source_code_folder + "script.js", "r"),
    open(source_code_folder + "storage.js", "r"),
    open(source_code_folder + "timers.js", "r"),
    open(source_code_folder + "content.js", "r"),
    open(source_code_folder + "define.js", "r")
]

for javascript_file in javascript_source_files:
    current_javascript_file = javascript_file.read()
    javascript_build.write(current_javascript_file)
    javascript_build.write("\n")
    javascript_file.close()

javascript_build.close()