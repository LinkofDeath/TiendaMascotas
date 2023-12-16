REM call del db.sqlite3
REM call fsutil file createnew db.sqlite3 0
call C:\ProyectosDjango\tiendamascotas_venv\Scripts\activate.bat
call python manage.py runscript -v3 eliminar_tablas
call rmdir /s /q C:\ProyectosDjango\tiendamascotas\core\migrations
call python manage.py makemigrations
call python manage.py makemigrations core
call python manage.py migrate
call python manage.py migrate core
