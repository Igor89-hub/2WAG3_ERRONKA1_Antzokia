<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ErosketaConfirmacion extends Mailable
{
    use Queueable, SerializesModels;

    public $ekitaldia;
    public $eserleku;
    public $datosPersonales;
    public $compra;

    public function __construct($ekitaldia, $eserleku, $datosPersonales, $compra)
    {
        $this->ekitaldia = $ekitaldia;
        $this->eserleku = $eserleku;
        $this->datosPersonales = $datosPersonales;
        $this->compra = $compra;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Erosketa Konfirmazioa - Antzokia',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.erosketa-confirmacion',  // Sigue usando Blade para emails
        );
    }
}