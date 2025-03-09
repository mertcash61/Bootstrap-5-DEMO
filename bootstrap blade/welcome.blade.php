@extends('layouts.app') <!-- Eğer bir layout kullanıyorsanız -->

@section('content')
<div class="container">
    <h2 class="mt-4">İletişim</h2>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Adınız</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">E-posta</label>
            <input type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Mesajınız</label>
            <textarea class="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Gönder</button>
    </form>
</div>
@endsection
