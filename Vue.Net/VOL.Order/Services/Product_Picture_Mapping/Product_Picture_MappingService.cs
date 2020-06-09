/*
 *Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,此处任何更改都可能导致被代码生成器覆盖
 *所有业务编写全部应在Partial文件夹下Product_Picture_MappingService与IProduct_Picture_MappingService中编写
 */
using VOL.Order.IRepositories;
using VOL.Order.IServices;
using VOL.Core.BaseProvider;
using VOL.Core.Extensions.AutofacManager;
using VOL.Entity.DomainModels;

namespace VOL.Order.Services
{
    public partial class Product_Picture_MappingService : ServiceBase<Product_Picture_Mapping, IProduct_Picture_MappingRepository>, IProduct_Picture_MappingService, IDependency
    {
        public Product_Picture_MappingService(IProduct_Picture_MappingRepository repository)
             : base(repository) 
        { 
           Init(repository);
        }
        public static IProduct_Picture_MappingService Instance
        {
           get { return AutofacContainerModule.GetService<IProduct_Picture_MappingService>(); }
        }
    }
}
