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
    [Entity(TableCnName = "产品",TableName = "Product")]
    public class Product:BaseEntity
    {
        /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="ProductId")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int ProductId { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyID")]
       [Column(TypeName="int")]
       public int? ModifyID { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateDate")]
       [Column(TypeName="datetime")]
       public DateTime? CreateDate { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Creator")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       public string Creator { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateID")]
       [Column(TypeName="int")]
       public int? CreateID { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Deleted")]
       [Column(TypeName="bit")]
       [Required(AllowEmptyStrings=false)]
       public bool Deleted { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Height")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal Height { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Width")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal Width { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Length")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal Length { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Weight")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal Weight { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="StockQuantity")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int StockQuantity { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="FullDescription")]
       [MaxLength(20000)]
       [Column(TypeName="nvarchar(20000)")]
       public string FullDescription { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ShortDescription")]
       [MaxLength(20000)]
       [Column(TypeName="nvarchar(20000)")]
       public string ShortDescription { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ProductCost")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal ProductCost { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Price")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal Price { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Name")]
       [MaxLength(20)]
       [Column(TypeName="nchar(20)")]
       public string Name { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="Modifier")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       public string Modifier { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyDate")]
       [Column(TypeName="datetime")]
       public DateTime? ModifyDate { get; set; }

       
    }
}