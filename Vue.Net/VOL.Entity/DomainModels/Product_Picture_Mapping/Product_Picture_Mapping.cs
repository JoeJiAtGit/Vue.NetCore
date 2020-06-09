/*
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *如果数据库字段发生变化，请在代码生器重新生成此Model
 */
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VOL.Entity.SystemModels;

namespace VOL.Entity.DomainModels
{
    [Entity(TableCnName = "产品图片映射",TableName = "Product_Picture_Mapping")]
    public class Product_Picture_Mapping:BaseEntity
    {
        /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="Id")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int Id { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ProductId")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int ProductId { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="PictureId")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int PictureId { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="DisplayOrder")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int DisplayOrder { get; set; }

       
    }
}