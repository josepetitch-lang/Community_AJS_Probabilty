#include <iostream>
#include <vector>
#include <string>
#include <locale>

using namespace std;

void dibujarMarco() {
    setlocale(LC_ALL, "");
    cout << "Panel Resumido" << endl;
    cout << "Estudiantes desarrolladores: José Petit, José Guanipa, Jesús Guerra, Gabriel García" << endl;
    cout << "Universidad: UNEFA" << endl;
}

void DibujarMenu() {
    setlocale(LC_ALL, "");
    cout << "Opcion 1: Ver Datos Globales" << endl;
    cout << "Opción 2: Ver Conclusiones Estadísticas" << endl;
    cout << "Opción 3: Ver Impacto Social de la Comunidad" << endl;
    cout << "Opción 4: Salir del Panel" <<  endl;
    cout << "" << endl;
    cout << "Seleccióne una opción" << endl;
}

int main(){
    setlocale(LC_ALL, "");
    int opcion = 0;

    while(opcion != 4) {
        #ifdef _WIN32
         system("cls");
        #else
          system("clear");
        #endif

        dibujarMarco();
        DibujarMenu();
        cin >> opcion;

        #ifdef _WIN32
           system("cls");
        #else
           system("clear");
        #endif

        dibujarMarco();

        switch(opcion){
            case 1:
                cout << "Datos Demográficos Recompilación" << endl;
                cout << "Comunidad: Antonio José de Sucre" << endl;
                cout << "Universo Total (Población): 50 habitantes en" << endl;
                cout << "Muestra: 20 habitantes" << endl;
                cout << "Jefa de Comuna: Sonia de Yrausquin" << endl;
                cout << "Estado de la Comunidad: Humilde, Sin espacios de recreación" << endl; 
                cout << "Personas Entrevistados: Jóvenes, Señores de mayor edad" << endl;
                break;
            case 2:
                cout << "Conclusiones de Probabilidad y Frecuencia:" << endl;
                cout << "Aprobación casi total de la creación de un club de ajedrez (con 94%)" << endl;
                cout << "La mayoría de personas rara vez práctica ajedrez, podría decirse que nunca o casi nunca" << endl;
                cout << "Consideran al ajedrez un juego de dificultad díficil o intermedio de dominar para un iniciante" << endl;
                cout << "Normalmente, no hay días donde asistan al mes en actividades deportivas o recreativas" << endl;
                break;
            case 3:
                cout << "Justificación Social del Proyecto:" << endl;
                cout << "La falta de un espacio físico de entretenimiento en el Sector I" << endl;
                cout << "El ajedrez es la opción más viable y económica" << endl;
                cout << "No requiere un gran espacio estructural permanente" << endl;
                cout << "Fomenta la agilidad mental y paciencia" << endl;
                break;
            case 4:
                cout << "Saliendo del Sistema" << endl;
                break;
            default:
                cout << "Opción Incorrecta, porfavor vuelva a intentarñp" << endl;
        }
        if(opcion != 4){
            cout << "" << endl;
            cout << "Presione Enter para volver al menú" << endl;
            cin.ignore();
            cin.get();
        }
    }
    return 0;
}