<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function user(Request $request){
        return $request->user();
    }

    public function store(StoreUserRequest $request){
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        return $user;
    }
}
