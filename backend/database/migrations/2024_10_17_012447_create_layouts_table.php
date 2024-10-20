<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('layouts', function (Blueprint $table) {
            $table->id();
            $table->json('layout');
            $table->timestamps();
        });

        // Inserindo os dados JSON na tabela layouts com o id
        DB::table('layouts')->insert([
            [
                'id' => 1, // Defina o ID que você deseja
                'layout' => json_encode([
                    "content" => [
                        [
                            "id" => "74b7ec2f-7d9a-434d-8e75-b67d621a96a2",
                            "titulo" => "Elemento Ordenável 2",
                            "subItems" => [
                                [
                                    "titulo" => "Grade de Cores",
                                    "items" => [
                                        [
                                            "id" => "034b2baf-49b5-4f22-bc0d-35aa6fa41209",
                                            "titulo" => "Primary",
                                            "cor" => "#4e73df"
                                        ],
                                        [
                                            "id" => "325bae21-4949-4193-a9c0-a273b2e452ac",
                                            "titulo" => "Success",
                                            "cor" => "#1cc88a"
                                        ],
                                        [
                                            "id" => "1497ef8a-6e7e-42c6-96eb-a78ea8c15954",
                                            "titulo" => "Info",
                                            "cor" => "#36b9cc"
                                        ],
                                        [
                                            "id" => "fa1ccdae-9f3b-4eb7-8421-e926ac25a4e8",
                                            "titulo" => "Warning",
                                            "cor" => "#f6c23e"
                                        ],
                                        [
                                            "id" => "dc23ba58-f02c-43d4-8250-d5e2cd34776e",
                                            "titulo" => "Danger",
                                            "cor" => "#e74a3b"
                                        ],
                                        [
                                            "id" => 6,
                                            "titulo" => "Secondary",
                                            "cor" => "#858796"
                                        ]
                                    ]
                                ],
                                [
                                    "titulo" => "Lista de Tarefas",
                                    "items" => [
                                        [
                                            "id" => "bf65dcdf-9641-455c-b068-319ac7eff42a",
                                            "task" => "tarefa 1",
                                            "time" => 1717276866
                                        ],
                                        [
                                            "id" => "4d47d9a0-6658-468a-ad27-a94ed3a66dff",
                                            "task" => "tarefa 2",
                                            "time" => 1727276866
                                        ],
                                        [
                                            "id" => "345c5495-99cd-4bc2-91a6-8284e78fe8a3",
                                            "task" => "tarefa 3",
                                            "time" => 1729276866
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            "id" => "20e49c68-4d4e-4a34-bafb-ecd22438c121",
                            "titulo" => "Elemento Ordenável 1",
                            "items" => [
                                [
                                    "id" => "68b1fa2f-7337-421b-90e7-241aceecafdf",
                                    "title" => "elemento 1",
                                    "value" => 10000,
                                    "classe" => "fas fa-trash"
                                ],
                                [
                                    "id" => "62fe0ec8-bdec-441c-aac2-8f95f99f49aa",
                                    "title" => "elemento 2",
                                    "value" => 23090,
                                    "classe" => "fas fa-edit"
                                ],
                                [
                                    "id" => "3735cf23-991f-47a6-8c15-e024d532fef2",
                                    "title" => "elemento 3",
                                    "value" => 475,
                                    "classe" => "fas fa-power-off"
                                ]
                            ]
                        ]
                    ]
                ])
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layouts');
    }
};
