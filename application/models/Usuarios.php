<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');



class Usuarios extends CI_Model {







  public function mostrar() {

    $this->db->select('*');
    $this->db->from('monitores');
    $consulta = $this->db->get();
    $resultado = $consulta->result_array();

    return $resultado;
  }

  public function insertar($cedula ,$nombre ,$apellidos,$area,$semestre,$descripcion){

  $this->db->insert('monitores', array('cedula'=> $cedula,'nombre'=>$nombre ,'apellidos'=>$apellidos , 'area' => $area , 'semestre'=>$semestre , 'descripcion' => $descripcion));

  }


  public function editar($id , $cedula ,$nombre ,$apellidos,$area,$semestre,$descripcion ){

  $this->db->from('monitores');
  $this->db->where('id',$id);
  $this->db->update('monitores',array('cedula'=> $cedula,'nombre'=>$nombre ,'apellidos'=>$apellidos , 'area' => $area , 'semestre'=>$semestre , 'descripcion' => $descripcion));

  }


  public function eliminar($id){
  $this->db->where('id',$id);
  $this->db->delete('monitores');
  }


}
