<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="mytheme">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>PLE-REAP</title>

  <link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet">
  {{-- <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> --}}

  {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"> --}}

  {{-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> --}}

  {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"> --}}

<link rel="stylesheet" href="{{mix('/css/app.css')}}">

  <link href="/css/select2.min.css" rel="stylesheet" />
  <link href="/lasla/css/line-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/css/select2-bootstrap.min.css">
  <link rel="stylesheet" href="/css/toastr.min.css">
  <link rel="stylesheet" href="/css/spotlight.min.css">

</head>
<body class="h-full m-0">
  
  <div id="app" >
    <mainlayout ref="main"></mainlayout>
  </div>
  <noscript>
    Your browser does not support JavaScript!
  </noscript>
<script src="{{mix('/js/app.js')}}"></script>
<script src="/js/select2.min.js"></script>
<script src="/js/toastr.min.js"></script>
<script src="/js/fontawesome.js"></script>
<script src="/js/spotlight.min.js"></script>
  
    <script>

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
        }</script>

</body>
</html>
