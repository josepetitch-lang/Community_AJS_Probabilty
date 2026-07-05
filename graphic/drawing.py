import os
import matplotlib.pyplot as plt

def generar_graficas_proyecto():
    
    if not os.path.exists('images'):
        os.makedirs('images')
        
   
    plt.style.use('dark_background')
    color_dorado = '#ca8a04'
    color_gris_azul = '#475569'
    color_azul = '#3b82f6'

    labels_p2 = ['Sí', 'No']
    valores_p2 = [94, 6] 
    
    plt.figure(figsize=(6, 4))
    bars = plt.bar(labels_p2, valores_p2, color=[color_dorado, color_gris_azul], width=0.5)
    plt.title('Aceptación de la Implementación del Club de Ajedrez', fontsize=12, pad=15)
    plt.ylabel('Porcentaje (%)')
    plt.ylim(0, 110)
    
    
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 2, f"{yval}%", ha='center', va='bottom', fontweight='bold')
        
    plt.tight_layout()
    plt.savefig('images/aceptacion_club.png', dpi=150, transparent=True)
    plt.close()

    
    labels_p3 = ['Nunca', 'Casi Nunca', 'Ocasionalmente', 'Todos los días']
    valores_p3 = [42, 26, 28, 2] 
    
    plt.figure(figsize=(8, 4))
    bars = plt.bar(labels_p3, valores_p3, color=color_azul, width=0.6)
    plt.title('Frecuencia de Juego o Interacción con Ajedrez', fontsize=12, pad=15)
    plt.ylabel('Porcentaje (%)')
    plt.ylim(0, 55)
    
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 1, f"{yval}%", ha='center', va='bottom', fontweight='bold')
        
    plt.tight_layout()
    plt.savefig('images/frecuencia_ajedrez.png', dpi=150, transparent=True)
    plt.close()

   
    labels_p4 = ['Intermedio', 'Difícil', 'Muy Difícil', 'Fácil']
    valores_p4 = [52, 30, 14, 2] 
    
    plt.figure(figsize=(8, 4))
    bars = plt.bar(labels_p4, valores_p4, color='#10b981', width=0.6) 
    plt.title('Percepción de Dificultad para Aprender Ajedrez', fontsize=12, pad=15)
    plt.ylabel('Porcentaje (%)')
    plt.ylim(0, 65)
    
    for bar in bars:
        yval = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, yval + 1, f"{yval}%", ha='center', va='bottom', fontweight='bold')
        
    plt.tight_layout()
    plt.savefig('images/dificultad_aprendizaje.png', dpi=150, transparent=True)
    plt.close()
    
    print("Gráficas generadas exitosamente en la carpeta 'images/'")


if __name__ == '__main__':
    generar_graficas_proyecto()