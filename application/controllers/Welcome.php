<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function mostrar() {

	$this->load->model('Usuarios');
	echo json_encode(array('data' => $this->Usuarios->mostrar()));

	}
	/*
	public function index()
	{
		$this->load->view('welcome_message');
	}
	*/
}
