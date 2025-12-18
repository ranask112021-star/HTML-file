#Day1  git merge practice


first of README.md file create 
personal information 

notepad README.md
# 👋 Hello, I’m Suresh Rana

## 📌 About Me
I am a beginner in software development and currently learning programming and version control systems.
I am eager to improve my skills and work on real-world projects.

## 🎯 Training Goals
- Learn Git & GitHub basics
- Understand branching and merging
- Improve programming skills in Python and JavaScript
- Build small projects for practice

## 📚 Current Focus
- Git commands
- Coding fundamentals
- Problem solving

## 🌱 Learning Journey
I am excited to learn and grow in the field of software development.


save the file command
git status
git add README.md
git commit -m "first commit file"
git branch -M main
git remote add origin https://github.com/sureshrana123/git-merge-parctice.git
git push -u origin main



Day2 
first of the git bash open 
type the terminal
git init git-merge-parctice
cd git-merge-parctice


next create a new folder
notes.txt
This is the main branch file.

Save & close the file
git add notes.file
git commit -m "second commit file"

and the brach1
git checkout -b branch1

next step edit the file
notes.txt

change to:
This is the main branch file.
Added change the feature-two branch1

save the banch
git add notes.txt
git commit -m "second commit file"

lets start Merge the branch1 into main branch
git chekout main
git merge branch1
git push origin main

conflict & resolve 
notes.txt

This is the main branch file.
Added change the feature-two branch1
Added change the feature-two branch2

and last step save the file
git add notes.txt
git commit -m "second commit file


