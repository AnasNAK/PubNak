<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;

class ContactController extends Controller
{
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
        $contact = Contact::findOrFail($contact->id);

        $contact->status = false;

        $contact->save();

        return ['message' => 'contact status updated successfully'];
    }

    public function all()
    {
        $contact = Contact::latest()->get();


        return    $contact ;
    }
    

    
    
    
    
    
    
    
    
    
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
