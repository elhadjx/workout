@echo off

setlocal

rem Check if the script is already in the Startup folder
if exist "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\myscript.bat" (
  echo The script is already installed in the Startup folder.
)

rem Copy the script to the Startup folder
xcopy "%~dp0myscript.bat" "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\" /y

echo The script has been installed in the Startup folder.

:loop

echo This is a test > test.txt

git add test.txt

git commit -m "Updating test file"

git push origin master

timeout /t 60

goto loop



:end
