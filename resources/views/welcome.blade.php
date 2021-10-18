<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
        <title>To-do</title>
    </head>
    <body class="antialiased">
        <div id="app">
            <transition>
                <router-view></router-view>
            </transition>
        </div>

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
