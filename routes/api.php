<?php

use Illuminate\Http\Request;
use App\Task;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/auth/register', 'AuthController@register');
Route::post('/auth/login', 'AuthController@login');

Route::group(['middleware' => 'jwt.auth:auth:api'], function () {
    Route::get('/auth/user', 'AuthController@user');
    Route::post('/auth/logout', 'AuthController@logout');

    //now this is protected
    Route::delete('tasks/{task}', function(Task $task){
        if($task->delete())
          return response('', 200);
        return response('', 400);
    });
});

Route::group(['middleware' => 'jwt.refresh:api'], function () {
    Route::get('/auth/refresh', 'AuthController@refresh');
});



Route::get('tasks', function(){
    return Task::all();
});

Route::post('tasks', function(Request $request){
  if($request->has('name')){
    $name = $request->get('name');
    $task = new Task;
    $task->name = $name;
    $task->save();
    return response($task->id, 201);
  }
  return response('Task must have a name.', 400);
});



Route::put('tasks/{task}', function(Request $request, Task $task){
    if($request->has('name')){
      $task->name = $request->get('name');
      $task->save();
      return response('', 200);
    }
    return response('Name field is missing.', 400);
});
