@echo off
title Push everything to GitHub

IF %1.==. GOTO No1

git add .
echo added files
git commit -m %1
echo commited
git push
echo pushed
GOTO End1

:No1
    echo commit message fehlt
    GOTO End1

:End1
    echo finished