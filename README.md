# Django-React-Crud

Ejemplo de  una lista de tareas con Backend en Django y FrontEnd en React.
Incluye solamente el CRUD de las tareas, sin considerar Autenticacion ni multiples usuarios

El backend: 
Utiliza un unico modelo de Dajngo para las tareas y el crud basico usando los presets de Django-rest-framework 
para generar las views automatiamente y con la interfaz de api de esa libreria.

El Frontend utiliza:
- axios. para las hacer las llamadas a la Api
- react-hook-form. para manejar la validacion y control del formulario
- react-hot-toast. para mostrar los mensajes al usuario.

 Es un ejemplo super basico, que no considera control de errores ni validaciones en Front o Backend
