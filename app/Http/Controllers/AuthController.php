<?php

namespace App\Http\Controllers;

use Auth;
use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array  $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  protected function validator(array $data)
  {
      return Validator::make($data, [
          'name' => 'required|max:255',
          'email' => 'required|email|max:255|unique:users',
          'password' => 'required|min:6',
      ]);
  }

  /**
   * Create a new user instance after a valid registration.
   *
   * @param  array  $data
   * @return User
   */
  protected function create(array $data)
  {
      return User::create([
          'name' => $data['name'],
          'email' => $data['email'],
          'password' => bcrypt($data['password']),
      ]);
  }

  /**
   * Handle a registration request for the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function register(Request $request)
  {
      $validator = $this->validator($request->all());

      if ($validator->fails()) {
         return response()->json($validator->errors(), 422);
      }

      $user = $this->create($request->all());

      $token = JWTAuth::fromUser($user);
      return response([
            'status' => 'success',
            'data' => $user
          ], 200)->header('Authorization', $token);;
  }

  /**
   * Handle a login request for the application.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */

  public function login(Request $request)
  {
      $credentials = $request->only('email', 'password');
      if ( ! $token = JWTAuth::attempt($credentials)) {
          return response([
              'status' => 'error',
              'error' => 'invalid.credentials',
              'msg' => 'Invalid Credentials.'              
          ], 400);
      }
      return response([
          'status' => 'success',
          'id_token' => $token
      ]);//->header('Authorization', $token);
  }

  public function logout()
  {
      JWTAuth::invalidate();
      return response([
          'status' => 'success',
          'msg' => 'Logged out Successfully.'
      ], 200);
  }

  /**
   * Show user information.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */

  public function user(Request $request)
  {
      $user = User::find(Auth::user()->id); 
      return response([
          'status' => 'success',
          'data' => $user
      ]);
  }

  public function refresh()
  {
      return response([
          'status' => 'success'
      ]);
  }  

}
