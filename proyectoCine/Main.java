package proyectoCine;

//import proyectoCine.Pelicula;

public class Main {

	public static void main(String[] args) {
		
		Pelicula Matrix = new Pelicula();
		Matrix.setNombre("Matrix");
		Matrix.setNombreOriginal("Matrix Origins");
		Matrix.setDisponible(true);
		Matrix.setDuracion(120);
		Matrix.setFechaDeIngreso("20/10/1989");
		//Creamos un objeto "genero" de Ciencia ficcion para asociar a la pelicula
		Genero SciFi = new Genero(); 
		SciFi.setDescripcion("Son peliculas de Sci-Fi que te va a volar la peluca");
		SciFi.setGenero("Ciencia Ficcion");
		
		Matrix.setGenero(SciFi);//Seteamos Matrix al genero creado anteriormente
		
		//Creamos un objeto de clasificacion para "adolescentes"
		Clasificacion adolescentes = new Clasificacion();
		adolescentes.setClasificacion("Adolescentes");
		adolescentes.setDescripcion("Pelicula apta para mayores de 13");
		
		Matrix.setClasificacion(adolescentes); //Seteada la pelicula en la clasi pg+13
		
		//Creando pais de origen
		PaisOrigen USA = new PaisOrigen();
		USA.setPaisOrigen("Estados Unidos");
		USA.setDescrpcion("Pelicula creada en Estados Unidos");
		
		//Seteamos la pelicula al pais
		Matrix.setPaisOrigen(USA);
		
		System.out.println(Matrix.getNombreOriginal());
		System.out.println("La pelicula tiene una duracion de: "+Matrix.getDuracion()+" mins");
		System.out.println(Matrix.getGenero().getGenero());
		System.out.println(Matrix.getGenero().getDescripcion());
		System.out.println(Matrix.getClasificacion().getClasificacion());
		System.out.println(Matrix.getClasificacion().getDescripcion());
		System.out.println(Matrix.getPaisOrigen().getPaisOrigen());
		System.out.println(Matrix.getPaisOrigen().getDescrpcion());
		System.out.println(Matrix.getDisponible());
		
		Pelicula elResplandor = new Pelicula();
		elResplandor.setNombre("El resplandor");
		Genero terror = new Genero();
		elResplandor.setGenero(terror);
		

	}

}
