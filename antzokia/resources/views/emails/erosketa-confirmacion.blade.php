<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #8B1538; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .info-row { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #8B1538; }
        .label { font-weight: bold; color: #8B1538; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Erosketa Konfirmazioa</h1>
        </div>
        
        <div class="content">
            <h2>Kaixo {{ $datosPersonales['izena'] }}!</h2>
            <p>Zure erosketa ondo jaso dugu. Hemen daude xehetasunak:</p>
            
            <div class="info-row">
                <span class="label">Ekitaldia:</span> {{ $ekitaldia->izena }}
            </div>
            
            <div class="info-row">
                <span class="label">Data:</span> {{ \Carbon\Carbon::parse($ekitaldia->hasiera_data)->format('Y-m-d H:i') }}
            </div>
            
            <div class="info-row">
                <span class="label">Eserlekua:</span> {{ $eserleku->deskribapena ?? 'Eserlekua ' . $eserleku->id_eserleku }}
            </div>
            
            <h3>Zure datuak:</h3>
            <div class="info-row">
                <span class="label">Izena:</span> {{ $datosPersonales['izena'] }} {{ $datosPersonales['abizenak'] }}
            </div>
            <div class="info-row">
                <span class="label">Telefonoa:</span> {{ $datosPersonales['telefonoa'] }}
            </div>
            <div class="info-row">
                <span class="label">Emaila:</span> {{ $datosPersonales['emaila'] }}
            </div>
            <div class="info-row">
                <span class="label">Posta Kodea:</span> {{ $datosPersonales['posta_kodea'] }}
            </div>
        </div>
        
        <div class="footer">
            <p>Eskerrik asko Antzokia aukeratzeagatik!</p>
            <p>© {{ date('Y') }} Bergarako Antzokia</p>
        </div>
    </div>
</body>
</html>