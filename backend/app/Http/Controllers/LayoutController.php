<?php

namespace App\Http\Controllers;

use App\Models\Layout;
use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function getLayout()
    {
        $layout = Layout::first();
        $layout->layout = json_decode($layout->layout);

        return response()->json($layout)
            ->header('Access-Control-Allow-Origin', '*')  // Permitir todas as origens
            ->header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS') // Métodos permitidos
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
    }

    public function storeLayout(Request $request)
    {

        $request->validate([
            'layout' => 'required|json'
        ]);
        
        $layout = Layout::updateOrCreate(
            ['id' => 1], 
            ['layout' => $request->layout]
        );

        return response()->json(['message' => 'Layout salvo com sucesso'])
            ->header('Access-Control-Allow-Origin', '*')  // Permitir todas as origens
            ->header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS') // Métodos permitidos
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
    }
}
