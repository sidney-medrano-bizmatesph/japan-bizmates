<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AutoReply extends Mailable
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

        $content = $data[0]['content'];
        $this->data['content'] = "
    <blockquote style='margin-bottom: 20px'>
        <p><strong>$subject</strong></p>
        <p>$content</p>
    </blockquote>
";
        $this->data['content'] .= "<p>Hi <strong>$name</strong>,</p>
        <p>Thanks so much for reaching out!</p>
        <p style='text-align: justify;'>This auto-reply is just to let you know&hellip; We received your email and will get back to you with a positive response as soon as possible. If you have any additional information that you think will help us to assist you, please feel free to reply to this email. We look forward to chatting soon!</p>
        <p>Cheers,</p>
        <p><strong>PLE-REAP Team</strong></p>";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from("contactus@ple-reap.com", "PLE-REAP")->subject($this->data['subject'])->markdown('emails.contact_us')
        ->with(['data'=>$this->data])
        ;
    }
}
