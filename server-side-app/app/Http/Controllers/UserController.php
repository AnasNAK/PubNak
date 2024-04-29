<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Requests\StoreContactRequest;

class UserController extends BaseApiController
{
    /**
     * Display a listing of the resource.
     */
    public function contactUs(StoreContactRequest $request)
    {
        $validatedData =  $request->validated();

        $contact = Contact::create($validatedData);

        return  $contact;
     }

    /**
     * Show the form for creating a new resource.
     */
    public function delete(Contact $contact)
    {
        $post = Contact::findOrFail($contact->id);

        $post->status = false;

        $post->save();

        return ['message' => 'Post status updated successfully'];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function login(){

    }
    public function logout(){

    }
    public function refresh(){
        
    }
}
