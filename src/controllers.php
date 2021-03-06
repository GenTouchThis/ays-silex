<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));

$app->get('/', function () use ($app) {
    return $app['twig']->render('pages/index.html.twig', array());
})->bind('inicio');

$app->get('/nosotros', function () use ($app) {
    return $app['twig']->render('pages/nosotros.html.twig', array());
})->bind('nosotros');

$app->get('/especialidades', function () use ($app) {
    return $app['twig']->render('pages/especialidades.html.twig', array());
})->bind('especialidades');

$app->get('/menu', function () use ($app) {
    return $app['twig']->render('pages/menu.html.twig', array());
})->bind('menu');

$app->get('/testimoniales', function () use ($app) {
    return $app['twig']->render('pages/testimoniales.html.twig', array());
})->bind('testimoniales');

$app->get('/contactenos', function () use ($app) {
    return $app['twig']->render('pages/contactenos.html.twig', array());
})->bind('contactenos');

$app->before(function ($request) use ($app) {
    $app['twig']->addGlobal('active', $request->get("_route"));
});

$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.html, or 40x.html, or 4xx.html, or error.html
    $templates = array(
        'errors/'.$code.'.html.twig',
        'errors/'.substr($code, 0, 2).'x.html.twig',
        'errors/'.substr($code, 0, 1).'xx.html.twig',
        'errors/default.html.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
