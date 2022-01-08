<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        //
        $this->data = $data[0];
        $name = $this->data['name'];
        $contact_number = $this->data['contact_number'];
        $email = $this->data['email'];
        $subject = $this->data['subject'];

        $this->data['content'] = "<div class='details'><p><strong>Sender details</strong></p><p>Name: <strong>$name</strong></p>";
        $this->data['content'] .= "<p>Contact number: <strong>$contact_number</strong></p>";
        $this->data['content'] .= "<p>Email: <strong>$email</strong></p></div>";
        $content = $data[0]['content'];
        $this->data['content'] .= "
    <blockquote>
        <p><strong>$subject</strong></p>
        <p>$content</p>
    </blockquote>";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // dd($this->data);
        return $this->from("contactus@ple-reap.com", "PLE-REAP")->subject($this->data['subject'])->markdown('emails.contact_us')
        ->with(['data'=>$this->data])
        ;
        // return $this->view('view.name');
    }
}
