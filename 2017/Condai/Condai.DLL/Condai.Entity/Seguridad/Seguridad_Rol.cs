//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Condai.Entity.Seguridad
{
    using System;
    using System.Collections.Generic;
    
    public partial class Seguridad_Rol
    {
        public Seguridad_Rol()
        {
            this.Seguridad_RolesPorUsuario = new HashSet<Seguridad_RolesPorUsuario>();
        }
    
        public int rouId { get; set; }
        public string rouNombre { get; set; }
        public string rouDescripcion { get; set; }
        public int usuIdCreo { get; set; }
        public System.DateTime usuFechaCreo { get; set; }
        public int usuIdActualizo { get; set; }
        public System.DateTime usuFechaActualizo { get; set; }
    
        public virtual ICollection<Seguridad_RolesPorUsuario> Seguridad_RolesPorUsuario { get; set; }
    }
}
