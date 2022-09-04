<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class loginController extends Controller
{
    /**
     * sends login.html from resources/pages
     */
    public function __invoke() {
        return view('login');
    }

    /**
     * verify user in database
     * @param Request $req
     * @return Response
     */
    public function authUser(Request $req) {
        echo $req->input('username');
    }
}
