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
    [Entity(TableCnName = "销售订单",TableName = "SellOrder",DetailTable =  new Type[] { typeof(SellOrderItem)},DetailTableCnName = "订单明细")]
    public class SellOrder:BaseEntity
    {
        /// <summary>
       ///订单类型
       /// </summary>
       [Display(Name ="订单类型")]
       [Column(TypeName="int")]
       [Editable(true)]
       [Required(AllowEmptyStrings=false)]
       public int OrderType { get; set; }

       /// <summary>
       ///运单号
       /// </summary>
       [Display(Name ="运单号")]
       [MaxLength(200)]
       [Column(TypeName="nvarchar(200)")]
       [Editable(true)]
       [Required(AllowEmptyStrings=false)]
       public string TranNo { get; set; }

       /// <summary>
       ///销售订单号
       /// </summary>
       [Display(Name ="销售订单号")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       [Editable(true)]
       [Required(AllowEmptyStrings=false)]
       public string SellNo { get; set; }

       /// <summary>
       ///审核状态
       /// </summary>
       [Display(Name ="审核状态")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int AuditStatus { get; set; }

       /// <summary>
       ///审核时间
       /// </summary>
       [Display(Name ="审核时间")]
       [Column(TypeName="datetime")]
       public DateTime? AuditDate { get; set; }

       /// <summary>
       ///审核人
       /// </summary>
       [Display(Name ="审核人")]
       [MaxLength(200)]
       [Column(TypeName="nvarchar(200)")]
       public string Auditor { get; set; }

       /// <summary>
       ///审核人Id
       /// </summary>
       [Display(Name ="审核人Id")]
       [Column(TypeName="int")]
       public int? AuditId { get; set; }

       /// <summary>
       ///备注
       /// </summary>
       [Display(Name ="备注")]
       [MaxLength(2000)]
       [Column(TypeName="nvarchar(2000)")]
       [Editable(true)]
       public string Remark { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="CreateID")]
       [Column(TypeName="int")]
       public int? CreateID { get; set; }

       /// <summary>
       ///创建人
       /// </summary>
       [Display(Name ="创建人")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       [Editable(true)]
       public string Creator { get; set; }

       /// <summary>
       ///创建时间
       /// </summary>
       [Display(Name ="创建时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? CreateDate { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Display(Name ="ModifyID")]
       [Column(TypeName="int")]
       public int? ModifyID { get; set; }

       /// <summary>
       ///修改人
       /// </summary>
       [Display(Name ="修改人")]
       [MaxLength(510)]
       [Column(TypeName="nvarchar(510)")]
       public string Modifier { get; set; }

       /// <summary>
       ///修改时间
       /// </summary>
       [Display(Name ="修改时间")]
       [Column(TypeName="datetime")]
       [Editable(true)]
       public DateTime? ModifyDate { get; set; }

       /// <summary>
       ///支付状态
       /// </summary>
       [Display(Name ="支付状态")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int PaymentStatusId { get; set; }

       /// <summary>
       ///发货状态
       /// </summary>
       [Display(Name ="发货状态")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int ShippingStatusId { get; set; }

       /// <summary>
       ///订单状态
       /// </summary>
       [Display(Name ="订单状态")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int OrderStatusId { get; set; }

       /// <summary>
       ///收货地址Id
       /// </summary>
       [Display(Name ="收货地址Id")]
       [Column(TypeName="int")]
       public int? PickupAddressId { get; set; }

       /// <summary>
       ///发货地址Id
       /// </summary>
       [Display(Name ="发货地址Id")]
       [Column(TypeName="int")]
       public int? ShippingAddressId { get; set; }

       /// <summary>
       ///客户Id
       /// </summary>
       [Display(Name ="客户Id")]
       [Column(TypeName="int")]
       [Required(AllowEmptyStrings=false)]
       public int CustomerId { get; set; }

       /// <summary>
       ///总价
       /// </summary>
       [Display(Name ="总价")]
       [DisplayFormat(DataFormatString="18,4")]
       [Column(TypeName="decimal")]
       [Required(AllowEmptyStrings=false)]
       public decimal OrderTotal { get; set; }

       /// <summary>
       ///店铺Id
       /// </summary>
       [Display(Name ="店铺Id")]
       [Column(TypeName="int")]
       public int? StoreId { get; set; }

       /// <summary>
       ///
       /// </summary>
       [Key]
       [Display(Name ="SellOrderId")]
       [Column(TypeName="uniqueidentifier")]
       [Required(AllowEmptyStrings=false)]
       public Guid SellOrderId { get; set; }

       [Display(Name ="订单明细")]
       public List<SellOrderItem> SellOrderItem { get; set; }

    }
}