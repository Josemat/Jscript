package proyectoCine;

public class Pelicula {
	private String nombre;
	private String nombreOriginal;
	private Integer duracion;
	private String fechaDeIngreso;
	private Boolean disponible;
	private Genero genero;
	private Clasificacion clasificacion;
	private PaisOrigen paisOrigen;
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getNombreOriginal() {
		return nombreOriginal;
	}
	public void setNombreOriginal(String nombreOriginal) {
		this.nombreOriginal = nombreOriginal;
	}
	public Integer getDuracion() {
		return duracion;
	}
	public void setDuracion(Integer duracion) {
		this.duracion = duracion;
	}
	public String getFechaDeIngreso() {
		return fechaDeIngreso;
	}
	public void setFechaDeIngreso(String fechaDeIngreso) {
		this.fechaDeIngreso = fechaDeIngreso;
	}
	public Boolean getDisponible() {
		return disponible;
	}
	public void setDisponible(Boolean disponible) {
		this.disponible = disponible;
	}
	
	
	//Genero
	
	
	public Genero getGenero() {
		return genero;
	}
	public void setGenero(Genero genero) {
		this.genero = genero;
	}
	
	//Clasificacion
	
	public Clasificacion getClasificacion() {
		return clasificacion;
	}
	public void setClasificacion(Clasificacion clasificacion) {
		this.clasificacion = clasificacion;
	}
	
	//Pais de origen
	
	public PaisOrigen getPaisOrigen() {
		return paisOrigen;
	}
	public void setPaisOrigen(PaisOrigen paisOrigen) {
		this.paisOrigen = paisOrigen;
	} 
	
	
}
