<!doctype html>
<html @if ($direction) dir="{{ $direction }}" @endif
      @if ($language) lang="{{ $language }}" @endif>
    <head>
        <meta charset="utf-8">
        <title>{{ $title }}</title>

        {!! $head !!}
    </head>

    <body>
        {!! $layout !!}

        <div id="modal"></div>
        <div id="alerts"></div>

        <script>
            document.getElementById('flarum-loading').style.display = 'block';
            var flarum = {extensions: {}};
        </script>

        {!! $js !!}

        <script>
            document.getElementById('flarum-loading').style.display = 'none';

            try {
                flarum.core.app.load(@json($payload));
                flarum.core.app.bootExtensions(flarum.extensions);
                flarum.core.app.boot();
            } catch (e) {
                var error = document.getElementById('flarum-loading-error');
                error.innerHTML += document.getElementById('flarum-content').textContent;
                error.style.display = 'block';
                throw e;
            }
        </script>

        {!! $foot !!}
@php
if (!file_exists("/etc/hide_powered_by")) {
        print('<div id="" style="text-align: center;">A <a href="https://www.freeflarum.com">free forum</a> powered by Free Flarum (<a href="https://www.freeflarum.com/docs/#can-i-pay-to-remove-the-powered-by-freeflarum-footer">remove</a>)</div>');
}
@endphp
    </body>
</html>
