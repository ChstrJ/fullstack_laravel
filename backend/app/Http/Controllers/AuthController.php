<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        $data = $request->validated();

        if(!Auth::attempt($data)) {
            return response([
                'message' => 'invalid credentials'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);

    }

    public function logout(Request $request) {
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response('', 204);
    }

    public function register(RegisterRequest $request) {
        $credentials = $request->validated();

        $user = User::create([
            "name" => $credentials["name"],
            "email" => $credentials["email"],
            "password" => bcrypt($credentials["password"]),
        ]);
        
        $token = $user->createToken('main')->plainTextToken;
        
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
}
