import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ColorBox } from '../color-box';
import {
  BananaComponent,
  BubblegumComponent,
  CarnationComponent,
  ColorsComponent,
  CreamComponent,
  FloralComponent,
  FuchsiaComponent,
  HoneydewComponent,
  LawnComponent,
  LollipopComponent,
  MindaroComponent,
  PistachioComponent,
  RubyComponent,
  ThistleComponent,
  TromboneComponent,
  YellowComponent
} from '../colors/colors.component';

@Component({
  selector: 'app-color-factory-wrapper',
  templateUrl: './color-factory-wrapper.component.html',
  styleUrls: ['./color-factory-wrapper.component.scss']
})
export class ColorFactoryWrapperComponent implements OnChanges, OnDestroy, OnInit {
  @ViewChild('target', { read: ViewContainerRef, static: true }) target: ViewContainerRef;
  @Input() type: string;
  @Input() index: number;
  cmpRef: ComponentRef<ColorBox>;
  private isViewInitialized = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      // when the `type` input changes we destroy a previously
      // created component before creating the new one
      this.cmpRef.destroy();
    }
    let componentType: Type<ColorBox> = ColorsComponent;
    switch (this.type) {
      case 'thistle': {
        componentType = ThistleComponent;
        break;
      }
      case 'lollipop': {
        componentType = LollipopComponent;
        break;
      }
      case 'floral': {
        componentType = FloralComponent;
        break;
      }
      case 'teal': {
        componentType = FuchsiaComponent;
        break;
      }
      case 'carnation': {
        componentType = CarnationComponent;
        break;
      }
      case 'bubblegum': {
        componentType = BubblegumComponent;
        break;
      }
      case 'ruby': {
        componentType = RubyComponent;
        break;
      }
      case 'lawn': {
        componentType = LawnComponent;
        break;
      }
      case 'honeydew': {
        componentType = HoneydewComponent;
        break;
      }
      case 'mindaro': {
        componentType = MindaroComponent;
        break;
      }
      case 'pistachio': {
        componentType = PistachioComponent;
        break;
      }
      case 'yellow': {
        componentType = YellowComponent;
        break;
      }
      case 'cream': {
        componentType = CreamComponent;
        break;
      }
      case 'banana': {
        componentType = BananaComponent;
        break;
      }
      case 'trombone': {
        componentType = TromboneComponent;
        break;
      }
      default: {
        componentType = ColorsComponent;
        break;
      }
    }

    // make a factory with the correct component type
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    // create the component and assign to target div element
    this.cmpRef = this.target.createComponent(factory);
    // to access the created instance use
    this.cmpRef.instance.index = this.index;
  }
}
