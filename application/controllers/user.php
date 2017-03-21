<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class user extends CI_Controller {

	public function mostrar() {

	$this->load->model('Usuarios');
	echo json_encode(array('data' => $this->Usuarios->mostrar()));

	}


  public function insertar(){
		$data = json_decode($_POST['data']);
		$this->load->model('Usuarios');
    $this->Usuarios->insertar($data->cedula , $data->nombre , $data->apellidos, $data->area ,$data->semestre ,$data->descripcion);

		}


		public function actualizar(){
			$data = json_decode($_POST['data']);
			$this->load->model('Usuarios');
	    $this->Usuarios->editar($data->id , $data->cedula , $data->nombre , $data->apellidos, $data->area ,$data->semestre ,$data->descripcion);

		}

		public function borrar(){
			$data = json_decode($_POST['data']);
			$this->load->model('Usuarios');
			$this->Usuarios->eliminar($data->id);

		}






	public function index()
	{
		$this->load->helper('url');
		$data = array(
			'url' => base_url()
		);
		$this->load->view('index', $data);
	}
}
